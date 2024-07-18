function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value / 100; //mengubah cm ke m
    var gender = document.querySelector('input[name="gender"]:checked'); // Memeriksa gender yang dipilih

    if (!gender) {

        //allert pop up
        Swal.fire({
            title: "Alert",
            html: "<strong>Please select your gender!</strong>",
            icon: "warning",
            customClass: {
                confirmButton: 'swal2-confirm'
            }
        });

        return; // Berhenti eksekusi jika gender belum dipilih
    }

    if (weight > 0 && height > 0) {
        var bmi = weight / (height * height);

        document.getElementById('underweight').style.display = 'none';
        document.getElementById('normal').style.display = 'none';
        document.getElementById('overweight').style.display = 'none';
        document.getElementById('obesity').style.display = 'none';

        if (bmi < 18.5) {
            document.getElementById('bmiUnderweight').innerText = bmi.toFixed(1);
            document.getElementById('underweight').style.display = 'block';
        } else if (bmi >= 18.5 && bmi < 25) {
            document.getElementById('bmiNormal').innerText = bmi.toFixed(1);
            document.getElementById('normal').style.display = 'block';
        } else if (bmi >= 25 && bmi < 30) {
            document.getElementById('bmiOverweight').innerText = bmi.toFixed(1);
            document.getElementById('overweight').style.display = 'block';
        } else {
            document.getElementById('bmiObesity').innerText = bmi.toFixed(1);
            document.getElementById('obesity').style.display = 'block';
        }

        // Scroll ke bagian hasil jika input valid
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });

    } else {
        Swal.fire({
            title: "Alert",
            html: "<strong>Please enter valid weight and height!</strong>",
            icon: "warning",
            customClass: {
                confirmButton: 'swal2-confirm' 
            }
        });
    }
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.getElementById('underweight').style.display = 'none';
    document.getElementById('normal').style.display = 'none';
    document.getElementById('overweight').style.display = 'none';
    document.getElementById('obesity').style.display = 'none';

    var genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach(function(radio) {
        radio.checked = false;
    });
}
