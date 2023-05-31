import { User } from 'entities/User';

export enum ArticlesSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleType {
  IT = 'IT',
  SIENCE = 'SIENCE',
  ECONOMICS = 'ECONOMICS',
}

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: ArticleBlockType.CODE;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock;

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
