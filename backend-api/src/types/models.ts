import { Document, ObjectId } from "mongoose";

//Author
export interface IAuthor extends Document {
  _id: ObjectId;
  image?: string;
  first_name: string;
  last_name?: string;
  birthDate: Date;
  nationality: string;
  bio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Banner
export interface IBanner extends Document {
  _id: ObjectId;
  title: string;
  link?: string;
  image: string;
  isHome?: boolean;
  isActive?: boolean;
  startDate?: Date;
  endDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
//Category
export interface ICategory extends Document {
  _id: ObjectId;
  category_name: string;
  slug: string;
  description?: string;
  banner?: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
//Comment
export interface IComment extends Document {
  _id: ObjectId;
  news: ObjectId;
  customer: ObjectId;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Customer
export interface IAddress {
  street?: string;
  city?: string;
  postalCode?: string;
}

export interface ICustomer extends Document {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  birthday: Date;
  phone?: string;
  address?: IAddress;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface INews extends Document {
  _id: ObjectId;
  title: string;
  slug: string;
  writer: ObjectId;
  shortDesc: string;
  content: string;
  thumbnail?: string;
  isPublish?: boolean;
  isDelete?: boolean;
  isHot?: boolean;
  createdAt?: Date;
}
//Order
export interface IOrderItem {
  product: ObjectId;
  quantity: number;
  price: number;
  discount?: number;
}

export interface IOrder extends Document {
  _id: ObjectId;
  customer: ObjectId;
  order_status: Number;
  payment_type: Number;
  order_date?: Date;
  require_date?: Date | null;
  shipping_date?: Date | null;
  order_note?: string;
  order_items: IOrderItem[];
  isDelete?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
//Product
interface IParam {
  name: string;
  value: string;
}

interface IPhoto {
  link: string;
  sort?: number;
}

export interface IProduct extends Document {
  _id: ObjectId;
  product_name: string;
  price?: number;
  discount?: number;
  isBest?: boolean;
  isHome?: boolean;
  gifts?: string[];
  slug: string;
  description?: string;
  category: ObjectId;
  supplier: ObjectId;
  author: ObjectId;
  model_year?: string;
  isDelete?: boolean;
  params?: IParam[];
  photos?: IPhoto[];
  relatedProducts?: ObjectId[];
  relatedPosts?: ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}
//ReviewProduct
export interface IReviewProduct extends Document {
  _id: ObjectId;
  product: ObjectId;
  customer: ObjectId;
  rating: number;
  comment?: string;
  isApproved?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
//Staff
export interface IStaff extends Document {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  isActive?: boolean;
  role?: 1 | 2;
  permissions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
//Supplier
export interface ISupplier extends Document {
  _id: ObjectId;
  supplier_name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
//Writer
export interface IWriter extends Document {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  bio?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
