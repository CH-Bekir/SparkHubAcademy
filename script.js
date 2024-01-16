// Kodlar ChatGBT ve (Selman Beyden kopyalandı-uyarlandı)
const quizData = [
    {
      question: "1. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Dogru Cevap ", isCorrect: true },
        { text: "Yanlış Cevap ", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "2. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap ", isCorrect: true },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "3. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "4. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
      ],
    },
    {
      question: "5. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
      ],
    },
    {
      question:"6. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
      ],
    },
    {
      question: "7. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Dogru Cevap", isCorrect: true },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "8. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "9. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
      ],
    },
    {
      question: "10. Sınav sorusu: Aşagıdakılerden hangisi doğrudur?!",
      answers: [
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Yanlış Cevap", isCorrect: false },
        { text: "Dogru Cevap", isCorrect: true },
      ],
    },
  ];
  
  let activeQuestionIndex = 0; // Aktif soru indeksi
let userAnswers = new Array(quizData.length).fill(-1); // Kullanıcı cevaplarını tutan dizi

// Başlangıç butonuna tıklanınca çalışacak fonksiyon
document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("quizContainer").style.display = ""; // Quiz görünür yapılır
  document.getElementById("header").style.display = "";
  document.getElementById("buttons").style.display = "";
  document.getElementById("quizApp").style.backgroundImage = "none"; // Arka plan resmi kaldırılır
  this.style.display = "none"; // Başlangıç butonu gizlenir
  loadQuestion(); // İlk soru yüklenir
});

// Aktif soruyu yükleyen fonksiyon
function loadQuestion() {
  const currentQuestion = quizData[activeQuestionIndex];
  const questionElement = document.getElementById("questionContainer");
  const answerListElement = document.getElementById("answersList");
  const questionNumberElement = document.getElementById("questionNumber");

  questionNumberElement.textContent =
    activeQuestionIndex + 1 + "/" + quizData.length; // Soru numarasını gösterir

  questionElement.textContent = "";
  answerListElement.innerHTML = "";

  questionElement.textContent = currentQuestion.question; // Soru metni

  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer.text; // Cevap metni

    // Cevaba tıklandığında cevabın kontrol edilmesi ve bir sonraki soruya geçilmesi
    li.onclick = () => {
      checkAnswer(answer.isCorrect, index);
      goToNextQuestion();
    };

    answerListElement.appendChild(li);
  });
}

// Bir sonraki soruya geçmeyi sağlayan fonksiyon
function goToNextQuestion() {
  if (activeQuestionIndex < quizData.length - 1) {
    activeQuestionIndex++;
    loadQuestion();
  } else {
    document.getElementById("quizContainer").innerHTML = "";
    const resultButton = document.createElement("p");
    resultButton.textContent = `"CLICK FOR RESULT"`;
    resultButton.id = "dynamicResultsButton"; // ID'yi "showResultsButton" dan "dynamicResultsButton" a değiştirdik
    resultButton.onclick = showResultsCard;
    document.getElementById("quizContainer").appendChild(resultButton);
  }
}

// Sonuçları gösteren kartı oluşturan fonksiyon
function showResultsCard() {
  // Mevcut sonuç kartını temizle
  const existingCard = document.querySelector(".result-card");
  if (existingCard) {
    existingCard.remove();
  }

  const card = document.createElement("div");
  card.className = "result-card";

  const resultText = document.createElement("p");
  let correctCount = calculateCorrectAnswers();
  resultText.textContent = correctCount + "/" + quizData.length; // Doğru cevap sayısı

  card.appendChild(resultText);

  let backgroundImageUrl;
  if (correctCount >= 8) {
    backgroundImageUrl = "url('/10 numara.png')";
  } else if (correctCount >= 6) {
    backgroundImageUrl = "url('/bravo.png')";
  } else if (correctCount >= 4) {
    backgroundImageUrl = "url('/düşünceli.png')";
  } else {
    backgroundImageUrl = "url('/5624589.jpg')";
  }

  console.log("Seçilen arka plan resmi:", backgroundImageUrl);
  card.style.backgroundImage = backgroundImageUrl;
  card.style.backgroundSize = "cover";
  card.style.backgroundPosition = "center";
  card.style.width = "100%"; // Kartın genişliğini ayarlayın
  card.style.height = "100%"; // Kartın yüksekliğini ayarlayın

  document.getElementById("quizContainer").appendChild(card);

  // Butonları gizle
  const resultButton = document.getElementById("dynamicResultsButton");
  if (resultButton) {
    resultButton.style.display = "none";
  }
  document.getElementById("nextButton").style.display = "none";
  document.getElementById("previousButton").style.display = "none";
}




// Doğru cevap sayısını hesaplayan fonksiyon
function calculateCorrectAnswers() {
  let correctCount = 0;
  userAnswers.forEach((answer, index) => {
    if (answer !== -1 && quizData[index].answers[answer].isCorrect) {
      correctCount++;
    }
  });
  return correctCount;
}

// Sonraki soru ve önceki soru butonlarını dinleyen fonksiyonlar
document.getElementById("nextButton").addEventListener("click", () => {
  if (activeQuestionIndex < quizData.length - 1) {
    activeQuestionIndex++;
    loadQuestion();
  }
});

document.getElementById("previousButton").addEventListener("click", () => {
  if (activeQuestionIndex > 0) {
    activeQuestionIndex--;
    loadQuestion();
  }
});

// Buton görünürlüğünü güncelleyen fonksiyon
function updateButtonVisibility() {
  if (activeQuestionIndex >= quizData.length) {
    document.getElementById("nextButton").style.display = "none";
  } else {
    document.getElementById("nextButton").style.display = "";
  }

  if (activeQuestionIndex <= 0) {
    document.getElementById("previousButton").style.display = "none";
  } else {
    document.getElementById("previousButton").style.display = "";
  }
}

// Sayfa yüklendiğinde ilk soruyu yükler ve buton görünürlüğünü ayarlar
window.onload = function () {
  activeQuestionIndex = 0;
  updateButtonVisibility();
};

// Kullanıcının cevaplarını kaydeden fonksiyon
function checkAnswer(isCorrect, answerIndex) {
  userAnswers[activeQuestionIndex] = answerIndex;
}

// Reset butonuna basınca sayfayı yeniden yükleyen işlev
document.getElementById("resetButton").addEventListener("click", function () {
  window.location.reload();
});