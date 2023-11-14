// 사용자 프로필 이미지와 키워드 목록 요소 가져오기
const userProfileImage = document.getElementById('user-profile-image');
const userImagePaths = [
    '사용자1의 프로필 이미지 경로',
    '사용자2의 프로필 이미지 경로',
    // 여러 사용자의 이미지 경로를 추가합니다.
];

// keywordList 요소 가져오기
const keywordList = document.getElementById("keywordList");

// keywordForm 요소 가져오기
const keywordForm = document.getElementById("keywordForm");

// 입력 필드 초기화
const keywordInput = document.getElementById("keyword");

// 키워드 입력 폼 제출 이벤트 처리
keywordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 입력된 키워드 가져오기
    const keyword = keywordInput.value;



// 현재 키워드 목록 가져오기
const keywords = keywordList.querySelectorAll("li");

// 목록에 추가된 키워드가 4개 미만인 경우에만 추가
if (keywords.length < 4) {
    // 새로운 키워드를 목록에 추가
    const listItem = document.createElement("li");
    listItem.textContent = keyword;

    // 삭제 버튼 추가
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
        // 삭제 버튼을 클릭할 때 해당 항목을 삭제합니다.
        listItem.remove();
    });

    listItem.appendChild(deleteButton);

    keywordList.appendChild(listItem);
}
