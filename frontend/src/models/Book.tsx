export interface Books  {
    _id: string ,
    title: string,
    author: string,
    publishYear: string 
  }

  export interface Book extends Books {
    createdAt : string,
    updatedAt: string
  }

