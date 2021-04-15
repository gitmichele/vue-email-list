function displayMail() {

    const arr = [];

    for (let i=0; i<10; i++){

        $.ajax({

            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            method: 'GET',
            success: function(data) {

                const newMail = data.response;
                arr.push(newMail)

                setTimeout(function() {

                    const target = $('#mail-container')
                    target.append('<div>' + arr[i] + '</div>')
                }, 1000)
            },
            error: function() {

                console.log('error');
            }          
        });
    };

    return arr
};


function init() {

    const targetBtn = $('#button');
    targetBtn.click(function() {

        displayMail()
    });
};

$(init)