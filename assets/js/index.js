if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}

jQuery('#print').on('click', function () {
    const doc = new jspdf.jsPDF();
    var elementHandler = {
        '.no-print': function (element, renderer) {
            return true;
        }
    };
    var source = window.document.getElementsByTagName("body")[0];
    doc.fromHTML(
        source,
        15,
        15,
        {
            'width': 180,'elementHandlers': elementHandler
        });
    doc.save('Ivan_Chornyi.pdf');
});
