export interface FilterButton {
  readonly type: Filter;
  readonly label: string;
  readonly isActive: boolean;
}

export enum Filter {
  All,
  Active,
  Completed
}

