document.getElementById('calculateButton').addEventListener('click', function () {
    const feet = parseFloat(document.getElementById('heightFeet').value) || 0;
    const inches = parseFloat(document.getElementById('heightInches').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;

    if (!weight || (!feet && !inches)) {
        alert('Please enter valid height and weight!');
        return;
    }

    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);
    const bmi = weight / (heightInMeters ** 2);

    const category = bmi < 18.5 ? 'Underweight' :
                     bmi <= 24.9 ? 'Normal' :
                     bmi <= 29.9 ? 'Overweight' :
                     bmi <= 39.9 ? 'Obesity' :
                     'Severe Obesity';

    document.getElementById('bmiResult').innerText = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById('categoryResult').innerText = `Category: ${category}`;

    highlightCategoryCircle(category);
});

function highlightCategoryCircle(category) {
    const circles = document.querySelectorAll('.category-circle');
    circles.forEach(circle => circle.classList.remove('highlight'));

    const categoryCircleMap = {
        'Underweight': 'underweightCircle',
        'Normal': 'normalCircle',
        'Overweight': 'overweightCircle',
        'Obesity': 'obesityCircle',
        'Severe Obesity': 'severeObesityCircle'
    };

    const circleId = categoryCircleMap[category];
    if (circleId) {
        document.getElementById(circleId).classList.add('highlight');
    }
}
