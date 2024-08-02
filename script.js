const text = document.querySelector('span');

            const textLoad = () => {
                setTimeout(() => {
                    text.textContent = "Web Designer";
                }, 0);
                setTimeout(() => {
                    text.textContent = "UI/UX Designer";
                }, 4000);
                setTimeout(() => {
                    text.textContent = "Web Development";
                }, 8000);
            }
            textLoad();
            setInterval(textLoad,12000);


            // Burger Menu

            function open() {
                document.getElementById(".nav").style.display = "block";
              }
