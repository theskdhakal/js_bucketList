const bucketBtn = document.querySelector(".bucket-btn");
const bucketInput = document.querySelector(".bucket-input");
const bucketList = document.querySelector(".bucket-list");

bucketBtn.addEventListener("click", function addBucket(e) {
  e.preventDefault();
  if (!bucketInput.value) {
    return;
  }

  //   create bucket div
  const bucketDiv = document.createElement("div");
  bucketDiv.classList.add("bucket");

  // create li and append to bucket div

  const newBucket = document.createElement("li");
  newBucket.classList.add("bucket-item");
  newBucket.innerText = bucketInput.value;

  bucketDiv.appendChild(newBucket);

  //check-btn
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
  completeBtn.classList.add("complete-btn");
  bucketDiv.appendChild(completeBtn);

  //delete-btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
  deleteBtn.classList.add("delete-btn");
  bucketDiv.appendChild(deleteBtn);

  //   append bucketDiv to bucketList
  bucketList.appendChild(bucketDiv);

  //empty input field after adding item to list
  bucketInput.value = "";
});

bucketList.addEventListener("click", function deleteCheck(e) {
  const item = e.target;

  //delete
  if (item.classList[0] === "delete-btn") {
    const list = item.parentElement;
    list.remove();
  }

  //complete
  if (item.classList[0] === "complete-btn") {
    const list = item.parentElement;
    list.classList.toggle("completed");
  }
});
