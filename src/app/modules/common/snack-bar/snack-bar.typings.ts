export interface SnackBarInputData {
  type: SnackBarType;
  snackText: string;
  snackCloseButtonText?: string;
  centerText?: boolean;
}

export type SnackBarType = 'Default' | 'Warn' | 'Error';
