// const alllinks  = document.querySelectorAll(".tabs a");
// const allTabs = document.querySelectorAll(".tab-content");

// alllinks.forEach(link => {
//     link.addEventListener('click', () =>{
//         const linkId = link.id;

//         alllinks.forEach(l => l.classList.toggle("active", l === link));
//         allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === linkId))
//     })
// })

const alllinks  = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

alllinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkId = link.getAttribute("data-tab");

        // تفعيل الرابط الذي تم الضغط عليه
        alllinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // إظهار التبويب المطلوب وإخفاء الباقي
        allTabs.forEach(tab => {
            tab.classList.remove("active-tab-content");
            if (tab.id === linkId) {
                tab.classList.add("active-tab-content");
            }
        });
    });
});
