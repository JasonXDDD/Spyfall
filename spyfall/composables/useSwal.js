import Swal from "sweetalert2/dist/sweetalert2.js";

export async function messageInput(title, text, params) {
  return await Swal.fire({
    title,
    text,
    input: "text",
    showCancelButton: true,
    ...params,
  });
}

export async function messageSuccess(title, text) {
  return await Swal.fire({
    title,
    text,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
}

export async function messageError(title, text) {
  return await Swal.fire({
    title,
    text,
    icon: "error",
    showConfirmButton: false,
    timer: 1500,
  });
}

export async function messageConfirm(title, text) {
  return await Swal.fire({
    title,
    text,
    icon: "warning",
    showConfirmButton: true,
    showCancelButton: true,
  });
}

export async function messageToast(title, text) {
  return await Swal.fire({
    title,
    text,
    icon: "success",
    showConfirmButton: false,
    toast: true,
    timerProgressBar: true,
    position: "bottom-start",
    timer: 3000,
  });
}

export async function messageInfo(html) {
  return await Swal.fire({
    html,
    icon: "warning",
    showConfirmButton: false,
    toast: true,
    width: "100%",
    position: "bottom-end",
    customClass: {
      htmlContainer: "!m-0 !h-full",
    },
  });
}

// custom
export async function messageUploadImage(image) {
  return await Swal.fire({
    title: "確認上傳圖片",
    html: `<img src="${image}" style="width: 100%; height: auto;" />`,
    icon: "warning",
    input: "radio",
    inputOptions: {
      inline: "行內圖片",
      block: "區塊圖片",
    },
    inputValidator: (value) => {
      if (!value) {
        return "請選擇圖片呈現方式";
      }
    },
    showCancelButton: true,
  });
}
