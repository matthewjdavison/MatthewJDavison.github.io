const portfolioItems = document.querySelector(".projects");
let anyModalOpen = false;
function openModal(e, linkClass){
    e.preventDefault();
if (!anyModalOpen) {
        const modalToggle = e.target.closest(linkClass);
        if (modalToggle) {

            const modal = modalToggle.parentElement.nextElementSibling;
            document.body.style.overflowY = "hidden";    
            modal.classList.add('open');
            anyModalOpen = true;
            const close = modal.children[0];
            close.addEventListener("click", _ => {
                modal.classList.remove('open');
                anyModalOpen = false;
                document.body.style.overflowY= "scroll";    
            })
        }
    }   
}

portfolioItems.addEventListener("click", (e) => openModal(e, '.project__link'));
// ====================================================== //
// ================ Portfolio Interactive =============== //
// ====================================================== //

const projects = document.querySelector('.projects').children;
for (let i = 0; i < projects.length; i++){
    projects[i].onkeydown = (e) => {
        if(e.keyCode === 13){
            console.log(e.target);
            if (!anyModalOpen) {                
                const modal = e.target.querySelector('.portfolio-modal');
                if (modal) {                    
                    console.log(modal);
                    modal.classList.add('open');
                    document.body.style.overflowY= "hidden";    
                    anyModalOpen = true;
                    const close = modal.children[0];
                    console.log(close);
                    close.addEventListener("click", _ => {
                        modal.classList.remove('open');
                        anyModalOpen = false;
                        document.body.style.overflowY= "scroll";    
                    })
                }
            }             
        }
    };
}