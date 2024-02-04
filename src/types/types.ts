type EntityType = {
    id: number;
    icon: string,
    title: string;
    subtitle: string;
    selected: Boolean,
}
  
type EntityToAddType = {
    title: string;
    subtitle: string;
}

export type { EntityType, EntityToAddType }