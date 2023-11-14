const timelineData = [
  {
    id: 1,
    date: "2023.10.19",
    time: "오후 06:15",
    price: "5000원",
    message: "부터 시작하겠습니다!",
    user: "챗봇",
  },
  {
    id: 2,
    date: "2023.10.19",
    time: "오후 10:15",
    price: "7000원",
    message: "제가 꼭 가지고 싶어요",
    user: "SunKim",
  },
  {
    id: 3,
    date: "2023.10.20",
    time: "오전 10:00",
    price: "7500원",
    message: "몇달 전부터 찾고 있었어요ㅜㅜ",
    user: "Jung람쥐",
  },
  {
    id: 4,
    date: "2023.10.20",
    time: "오후 2:35",
    price: "8000원",
    message: "저에게 꼭 팔아주십쇼!!!!!",
    user: "choi🌞one",
  },
  {
    id: 5,
    date: "2023.10.21",
    time: "오후 12:00",
    price: "9000원",
    message: "제가 가질 겁니다",
    user: "choiapply",
  },
  {
    id: 6,
    date: "2023.10.22",
    time: "오전 1:55",
    price: "10000원",
    message: "이것은 곧 제 것이 될겁니다",
    user: "Gold-kite",
  },
];

const timelineContainer = document.getElementById("timelineContainer");

timelineData.forEach((timelineData) => {
  //메시지 카드
  const renewal = document.createElement("div");
  renewal.classList.add("renewal");

  //날짜+시간
  const dateAndTime = document.createElement("span");
  dateAndTime.classList.add("dateAndTime");

  const date = document.createElement("div");
  date.textContent = timelineData.date;
  date.classList.add("date");

  const time = document.createElement("div");
  time.textContent = timelineData.time;
  time.classList.add("time");

  dateAndTime.appendChild(date);
  dateAndTime.appendChild(time);

  //멘트(=가격+메시지)+닉네임
  const mentAndUser = document.createElement("span");
  mentAndUser.classList.add("mentAndUser");

  const ment = document.createElement("div");
  ment.classList.add("ment");

  const price = document.createElement("div");
  price.textContent = timelineData.price;
  price.classList.add("price");

  const message = document.createElement("div");
  message.textContent = timelineData.message;
  message.classList.add("message");

  ment.appendChild(price);
  ment.appendChild(message);

  const user = document.createElement("div");
  user.textContent = timelineData.user;
  user.classList.add("user");

  mentAndUser.appendChild(ment);
  mentAndUser.appendChild(user);

  //메시지 카드 하위로 항목들을 appendChild
  renewal.appendChild(dateAndTime);
  renewal.appendChild(mentAndUser);

  timelineContainer.appendChild(renewal);
});
