let inspectionRounds = [];

function loadInspectionRounds(){

    google.script.run

        .withSuccessHandler(function(data){

            inspectionRounds = data;

            renderInspectionRounds();

        })

        .apiGetInspectionRounds();

}

function renderInspectionRounds(){

    const tbody = document.getElementById("inspectionRoundTable");

    if(!tbody) return;

    tbody.innerHTML="";

    if(inspectionRounds.length<=1){

        tbody.innerHTML=`
        <tr>
            <td colspan="5" class="text-center">
                ยังไม่มีรอบตรวจ
            </td>
        </tr>`;

        return;

    }

    for(let i=1;i<inspectionRounds.length;i++){

        const r=inspectionRounds[i];

        tbody.innerHTML+=`
        <tr>

            <td>${r[1]}</td>

            <td>${r[2]}</td>

            <td>${r[3]}</td>

            <td>${r[4]}</td>

            <td>

                <button class="btn btn-success btn-sm">

                    เริ่มตรวจ

                </button>

            </td>

        </tr>
        `;

    }

}
let inspectionModal = null;

function openInspectionRoundModal(){

    inspectionModal = new bootstrap.Modal(
        document.getElementById("inspectionRoundModal")
    );

    inspectionModal.show();

}

function saveInspectionRound(){

    const data = {

        year: document.getElementById("inspectionYear").value,

        startDate: document.getElementById("inspectionStart").value,

        endDate: document.getElementById("inspectionEnd").value,

        remark: document.getElementById("inspectionRemark").value

    };

    google.script.run

        .withSuccessHandler(function(){

            inspectionModal.hide();

            loadInspectionRounds();

            alert("บันทึกรอบตรวจเรียบร้อย");

        })

        .apiAddInspectionRound(data);

}
function showInspectionPage(){

    document.getElementById("dashboard-page").style.display="none";

    document.getElementById("asset-page").style.display="none";

    document.getElementById("inspection-page").style.display="block";

    loadInspectionRounds();

}