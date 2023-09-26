export const ErrorMessage = {
  InvalidPath: 'Invalid path parameters',
  InvalidQuery: 'Invalid query parameters',
  DBDown: 'Database Server Down',
  NotArticle: 'Article not published',
  BadRequest: 'Bad Request',
  NotFound: 'Not Found',
  FileNotFound: 'File not found',
  ExcludedExtension:
    'Unsupported file type selected. Please choose a valid file type.',
  InternalError: 'Internal Server Error',
  NotFlightFile: '更新ファイルが存在しませんでした。',
} as const;
export type ErrorMessage = (typeof ErrorMessage)[keyof typeof ErrorMessage];

export const ValidationKeyword = {
  Required: 'required',
  Enum: 'enum',
  MaxLength: 'maxLength',
  MinLength: 'minLength',
  Format: 'format',
} as const;
export type ValidationKeyword =
  (typeof ValidationKeyword)[keyof typeof ValidationKeyword];

export const ValidationMessage = {
  InvalidInput: '値が不正です。',
  RequiredName: '氏名を入力してください。',
  RequiredNameYomi: '氏名（ふりがな）を入力してください。',
  RequiredGender: '性別を選択してください。',
  RequiredBirthday:
    '生年月日を8桁で入力してください。（例：1990年1月1日→19900101）',
  RequiredAddressNumber: '郵便番号を入力してください。',
  RequiredPrefecture: '都道府県を選択してください。',
  RequiredMunicipality: '市区町村を入力してください。',
  RequiredAddress: '番地を入力してください。',
  RequiredPhoneNumber: '電話番号を入力してください。',
  RequiredEmail: 'メールアドレスを入力してください。',
  RequiredPlace: '場所を選択してください。',
  RequiredContent: '内容を入力してください。',
  RequiredIsNeedReply: '選択してください。',
  MaxLength30: '30文字以下で入力してください。',
  MaxLength40: '40文字以下で入力してください。',
  MaxLength100: '100文字以下で入力してください。',
  MaxLength2000: '2000文字以下で入力してください。',
} as const;
export type ValidationMessage =
  (typeof ValidationMessage)[keyof typeof ValidationMessage];

/**
 * バリデーションエラーのインターフェース
 */
export interface ValidationInfos {
  field: string;
  message: string;
}

/**
 * カスタムエラークラス
 */
export class CustomError extends Error {
  statusCode: number;
  validationInfos?: Array<ValidationInfos>;

  constructor(
    message: string,
    statusCode: number,
    validationInfos?: Array<ValidationInfos>,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.validationInfos = validationInfos;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}