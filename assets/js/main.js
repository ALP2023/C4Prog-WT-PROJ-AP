document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.getElementById('showMoreButton');
    const showMoreContent = document.getElementById('showMoreContent');

    showMoreButton.addEventListener('click', function() {
        /*    showMoreContent.style.display = 'block';
            showMoreButton.style.display = 'none';*/
        if (showMoreContent.style.display === 'none' || showMoreContent.style.display === '') {
            showMoreContent.style.display = 'block';
            showMoreButton.textContent = 'Show Less';
        } else {
            showMoreContent.style.display = 'none';
            showMoreButton.textContent = 'Show More';
        }

    });

    const showMoreButton1 = document.getElementById('showMoreButton1');
    const showMoreContent1 = document.getElementById('showMoreContent1');

    showMoreButton1.addEventListener('click', function() {
        if (showMoreContent1.style.display === 'none' || showMoreContent1.style.display === '') {
            showMoreContent1.style.display = 'block';
            showMoreButton1.textContent = 'Show Less';
        } else {
            showMoreContent1.style.display = 'none';
            showMoreButton1.textContent = 'Show More';
        }
    });

    const showMoreButton2 = document.getElementById('showMoreButton2');
    const showMoreContent2 = document.getElementById('showMoreContent2');

    showMoreButton2.addEventListener('click', function() {
        if (showMoreContent2.style.display === 'none' || showMoreContent1.style.display === '') {
            showMoreContent2.style.display = 'block';
            showMoreButton2.textContent = 'Show Less';
        } else {
            showMoreContent2.style.display = 'none';
            showMoreButton2.textContent = 'Show More';
        }

        const showMoreButton3 = document.getElementById('showMoreButton3');
        const showMoreContent3 = document.getElementById('showMoreContent3');

        showMoreButton3.addEventListener('click', function() {
            if (showMoreContent3.style.display === 'none' || showMoreContent3.style.display === '') {
                showMoreContent3.style.display = 'block';
                showMoreButton3.textContent = 'Show Less';
            } else {
                showMoreContent3.style.display = 'none';
                showMoreButton3.textContent = 'Show More';
            }
        });

        const showMoreButton4 = document.getElementById('showMoreButton4');
        const showMoreContent4 = document.getElementById('showMoreContent4');

        showMoreButton4.addEventListener('click', function() {
            if (showMoreContent4.style.display === 'none' || showMoreContent4.style.display === '') {
                showMoreContent4.style.display = 'block';
                showMoreButton4.textContent = 'Show Less';
            } else {
                showMoreContent4.style.display = 'none';
                showMoreButton4.textContent = 'Show More';
            }
        });

        const showMoreButton5 = document.getElementById('showMoreButton5');
        const showMoreContent5 = document.getElementById('showMoreContent5');

        showMoreButton5.addEventListener('click', function() {
            if (showMoreContent5.style.display === 'none' || showMoreContent5.style.display === '') {
                showMoreContent5.style.display = 'block';
                showMoreButton5.textContent = 'Show Less';
            } else {
                showMoreContent5.style.display = 'none';
                showMoreButton5.textContent = 'Show More';
            }
        });

    });

});
