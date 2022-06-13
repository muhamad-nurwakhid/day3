function submitdata(){

        let name = document.getElementById('input-name').value;
        let email = document.getElementById('input-email').value;
        let phone = document.getElementById('input-phone').value;
        let subject = document.getElementById('choose-subject').value;
        let message = document.getElementById('input-message').value;
      
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(subject);
        console.log(message);

        if (name == '') {
            alert('nama belum diisi');
          }
        if (email == '') {
            alert('email belum diisi');
          }
        if (phone == '') {
            alert('phone belum diisi');
          }
      
        if (name == '' || email == '' || phone == '') {
          alert('form wajib diisi semua');
          }

        let emailReceiver = "muhamadnurwakhid@gmail.com"
        let a = document.createElement('a')

        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name} ${message} silahkan hubungi ${phone} Email: ${email}`
        a.click()

        let dataObject = {
            fuulname: name,
            email,
            phoneNumber: phone,
            subject,
            message,
          };
        
          console.log(dataObject);
}