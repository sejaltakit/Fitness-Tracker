function updateProgress() {
    const steps = parseInt(document.getElementById('steps').value) || 0;
    const water = parseInt(document.getElementById('water').value) || 0;
    const calories = parseInt(document.getElementById('calories').value) || 0;
  
    const stepsPercent = Math.min((steps / 10000) * 100, 100);
    const waterPercent = Math.min((water / 3000) * 100, 100);
    const caloriesPercent = Math.min((calories / 500) * 100, 100);
  
    document.getElementById('stepsProgress').style.width = stepsPercent + '%';
    document.getElementById('stepsProgress').innerText = Math.floor(stepsPercent) + '%';
  
    document.getElementById('waterProgress').style.width = waterPercent + '%';
    document.getElementById('waterProgress').innerText = Math.floor(waterPercent) + '%';
  
    document.getElementById('caloriesProgress').style.width = caloriesPercent + '%';
    document.getElementById('caloriesProgress').innerText = Math.floor(caloriesPercent) + '%';
  }
  