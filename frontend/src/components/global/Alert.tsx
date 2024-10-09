import Swal from "sweetalert2";

export namespace Alert {
  export const simpleAlert = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
    });
  };
  export const confirmAlert = async (title: string, text: string) => {
    return (await Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, exclua!",
      cancelButtonText: "Não, mantenha!",
    })).value;
  };
}
