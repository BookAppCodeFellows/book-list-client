var app = app || {};

(module => {
    
    const adminView = {}
    const $view = $('#book-admin-page')
    adminView.init = () => {
        adminView.verify()
        console.log('manipulate DOM as needed')
        $view.show()
    }
    adminView.verify = () => {
        const password = '1234'
        $('#verify-btn').off().on('click', (event) => {
            event.preventDefault()
            let input = $('#pass-phrase').val()
            if (input === password) {
                $('.not-admin').removeClass('not-admin')
                console.log('logged in as admin')
            } else {
                alert('You need to enter the correct passphrase.')
            }
        })
    }
    module.adminView = adminView
})(app)