type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type Result = Person[keyof Person];
