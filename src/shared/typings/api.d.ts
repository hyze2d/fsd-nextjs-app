type DateTimeString = string; //'2022-04-08T06:48:27.121Z'

type CreateAndUpdate<T> = T & {
  updatedAt: DateTimeString;
  createdAt: DateTimeString;
};
