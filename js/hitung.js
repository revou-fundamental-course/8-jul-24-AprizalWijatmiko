function calculateBMI() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value / 100;

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
  } else {
      alert("Please enter valid weight and height!");
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
}