console.log('success');

let viz;

//Add Share Link to Tableau Public in here
const url = "https://public.tableau.com/views/Book1_17149890022240/AwesomeChocolateDashboardReport?:language=en-GB&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

const VinceChua = document.getElementById('ErikkaEnaje');
const options = {
    hideTabs: true,
    height: 1000,
    width: 1200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
    }
};

function openTableau() {
    viz = new tableau.Viz(VinceChua, url, options);
}

document.addEventListener("DOMContentLoaded", openTableau);
