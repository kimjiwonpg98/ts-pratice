type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(direction);
}

move("right");

type SuccessState = {
  response: {
    body: string;
  };
};

type FailureState = {
  reason: string;
};

type Login = SuccessState | FailureState;

function login(id: string, pw: string): Login {
  if (id && pw)
    return {
      response: {
        body: "login",
      },
    };
  return {
    reason: "just~",
  };
}

console.log(login("id", "pw"));
