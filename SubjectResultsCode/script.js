function getMarks() {
    const numSubjectsInput = document.getElementById('numSubjects');
    const numSubjects = parseInt(numSubjectsInput.value);
  
    if (isNaN(numSubjects) || numSubjects <= 0) {
      alert('Please enter a valid number of subjects.');
      return;
    }
  
    let totalMarks = 0;
  
    for (let i = 1; i <= numSubjects; i++) {
      let subjectMarks;
      do {
        subjectMarks = prompt(`Enter marks for Subject ${i}`);
      } while (isNaN(subjectMarks) || subjectMarks.trim() === '');
  
      totalMarks += parseInt(subjectMarks);
    }
  
    const averageMarks = totalMarks / numSubjects;
    const grade = calculateGrade(averageMarks);
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>Your average marks are: ${averageMarks.toFixed(2)}</p>
      <p>Your grade is: ${grade}</p>
    `;
  }
  
  function calculateGrade(averageMarks) {
    if (averageMarks >= 90) {
      return 'A';
    } else if (averageMarks >= 80) {
      return 'B';
    } else if (averageMarks >= 70) {
      return 'C';
    } else if (averageMarks >= 60) {
      return 'D';
    } else if (averageMarks >= 50) {
      return 'E';
    } else {
      return 'F';
    }
  }
  
