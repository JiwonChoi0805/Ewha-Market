const itemsData = [
  {
    id: 1,
    image:
      "https://cdn.eyesmag.com/content/uploads/sliderImages/2023/04/28/starbucks-summer-03-f9d8c173-0573-4d84-82be-d6d1cebb9153.jpg",
    title: "곤약음료",
    price: "7,000원",
    due: "11/26",
  },
  {
    id: 2,
    image:
      "https://www.biz-con.co.kr/upload/images/202201/400_20220110114052876.jpg",
    title: "아아메~~~",
    price: "4,500원",
    due: "11/28",
  },
  {
    id: 3,
    image: "https://sitem.ssgcdn.com/88/71/03/item/1000291037188_i1_750.jpg",
    title: "돌체라떼",
    price: "5,500원",
    due: "11/30",
  },
  {
    id: 4,
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2022/03/[9200000002672]_20220311105511600.jpg",
    title: "제주말차돌체",
    price: "6,500원",
    due: "11/29",
  },
  {
    id: 5,
    image:
      "https://tripinfozone.com/wp-content/uploads/2023/07/%EC%A0%9C%EC%A3%BC-%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4-%EB%A9%94%EB%89%B4_1.png",
    title: "바나나나",
    price: "5,800원",
    due: "11/28",
  },
  {
    id: 6,
    image:
      "https://image.istarbucks.co.kr/upload/store/skuimg/2023/03/[9200000004354]_20230320154318507.jpg",
    title: "흑당당당달다구리",
    price: "6,400원",
    due: "11/27",
  },
  {
    id: 7,
    image: "https://cdn.dailycnc.com/news/photo/201702/67059_173929_5513.jpg",
    title: "슈 크림 latte",
    price: "6,800원",
    due: "11/27",
  },
];

const itemContainer = document.getElementById("itemContainer");

itemsData.forEach((itemData) => {
  //아이템 카드
  const item = document.createElement("div");
  item.classList.add("item");

  //아이템 이미지
  const img = document.createElement("img");
  img.src = itemData.image;
  img.alt = itemData.title;
  img.classList.add("itemImg");

  //아이템 제목
  const title = document.createElement("div");
  title.textContent = itemData.title;
  title.classList.add("itemTitle");

  //아이템 가격+기한
  const priceAndDue = document.createElement("div");
  priceAndDue.classList.add("priceAndDue");

  const pPrice = document.createElement("span");
  pPrice.textContent = itemData.price;
  pPrice.classList.add("itemPrice");

  const pDue = document.createElement("span");
  pDue.textContent = itemData.due;
  pDue.classList.add("itemDue");

  priceAndDue.appendChild(pPrice);
  priceAndDue.appendChild(pDue);

  //아이템 상세보기+조회수
  const viewAndliked = document.createElement("span");
  viewAndliked.classList.add("viewAndliked");

  const viewMore = document.createElement("span");
  viewMore.textContent = "View More > ";
  viewMore.classList.add("viewMore");

  const isliked = document.createElement("img");
  isliked.classList.add("isliked");
  isliked.src = "../static/take_page/img_take_page/isliked.png";

  viewAndliked.appendChild(viewMore);
  viewAndliked.appendChild(isliked);

  //아이템 카드 하위로 항목들을 appendchild
  item.appendChild(img);
  item.appendChild(title);
  item.appendChild(priceAndDue);
  item.appendChild(viewAndliked);

  itemContainer.appendChild(item);
});
