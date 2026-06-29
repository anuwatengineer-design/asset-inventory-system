let assetData = [];

document.addEventListener("DOMContentLoaded", function () {
  loadDashboard();
  loadAssets();

  const txtSearch = document.getElementById("txtSearch");
  if (txtSearch) {
    txtSearch.addEventListener("keyup", searchAssets);
  }
});

function loadDashboard() {

  google.script.run
    .withSuccessHandler(function (data) {

      document.getElementById("assetCount").innerHTML = data.assetCount;
      document.getElementById("checkedCount").innerHTML = data.checkedCount;
      document.getElementById("waitingCount").innerHTML = data.waitingCount;
      document.getElementById("locationCount").innerHTML = data.locationCount;

    })
    .apiGetDashboard();

}

function loadAssets() {

  google.script.run
    .withSuccessHandler(function (data) {

      assetData = data;

      renderAssets(data);

    })
    .apiGetAssets();

}

function renderAssets(data) {

  const tbody = document.getElementById("assetTable");

  tbody.innerHTML = "";

  if (data.length <= 1) {

    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center">
          ยังไม่มีข้อมูล
        </td>
      </tr>`;

    return;

  }

  for (let i = 1; i < data.length; i++) {

    const r = data[i];

    tbody.innerHTML += `

<tr>

<td>${r[1] || ""}</td>

<td>${r[4] || ""}</td>

<td>${r[10] || ""}</td>

<td>${r[8] || 0}</td>

<td>
<span class="badge bg-success">
${r[13] || "ACTIVE"}
</span>
</td>

<td>

<button class="btn btn-warning btn-sm">
แก้ไข
</button>

<button class="btn btn-danger btn-sm">
ลบ
</button>

</td>

</tr>

`;

  }

}

function searchAssets() {

  const keyword = document
    .getElementById("txtSearch")
    .value
    .toLowerCase();

  if (keyword == "") {

    renderAssets(assetData);

    return;

  }

  const result = [];

  result.push(assetData[0]);

  for (let i = 1; i < assetData.length; i++) {

    if (assetData[i].join(" ").toLowerCase().includes(keyword)) {

      result.push(assetData[i]);

    }

  }

  renderAssets(result);

}