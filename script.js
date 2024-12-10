// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and calculators
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.calculator').forEach(calc => calc.classList.remove('active'));
        
        // Add active class to clicked button and corresponding calculator
        button.classList.add('active');
        document.getElementById(`${button.dataset.tab}-calculator`).classList.add('active');
    });
});

function calculateSimpleInterest() {
    const principal = parseFloat(document.getElementById('simple-principal').value);
    const rate = parseFloat(document.getElementById('simple-rate').value);
    const time = parseFloat(document.getElementById('simple-time').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;

    const resultDiv = document.getElementById('simple-result');
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p>Principal Amount: $${principal.toFixed(2)}</p>
        <p>Interest Earned: $${interest.toFixed(2)}</p>
        <p>Total Amount: $${total.toFixed(2)}</p>
        <canvas class="result-chart"></canvas>
    `;
    resultDiv.classList.add('active');

    // Create chart
    const canvas = resultDiv.querySelector('.result-chart');
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#3b82f6', '#60a5fa'],
                borderColor: ['#2563eb', '#3b82f6'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });
}

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('compound-principal').value);
    const rate = parseFloat(document.getElementById('compound-rate').value);
    const time = parseFloat(document.getElementById('compound-time').value);
    const frequency = parseFloat(document.getElementById('compound-frequency').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    const amount = principal * Math.pow(1 + (rate/100)/frequency, frequency * time);
    const interest = amount - principal;

    const resultDiv = document.getElementById('compound-result');
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p>Principal Amount: $${principal.toFixed(2)}</p>
        <p>Interest Earned: $${interest.toFixed(2)}</p>
        <p>Total Amount: $${amount.toFixed(2)}</p>
        <canvas class="result-chart"></canvas>
    `;
    resultDiv.classList.add('active');

    // Create chart
    const canvas = resultDiv.querySelector('.result-chart');
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#3b82f6', '#60a5fa'],
                borderColor: ['#2563eb', '#3b82f6'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });
}

function calculateLoanEMI() {
    const principal = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const time = parseFloat(document.getElementById('loan-term').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    const monthlyRate = rate / 12 / 100;
    const months = time * 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    const resultDiv = document.getElementById('loan-result');
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p>Monthly EMI: $${emi.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
        <canvas class="result-chart"></canvas>
    `;
    resultDiv.classList.add('active');

    // Create chart
    const canvas = resultDiv.querySelector('.result-chart');
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, totalInterest],
                backgroundColor: ['#3b82f6', '#60a5fa'],
                borderColor: ['#2563eb', '#3b82f6'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f1f5f9'
                    }
                }
            }
        }
    });
}

console.log('Chart.js version:', Chart.version); 