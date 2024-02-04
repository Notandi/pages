import {EntityType} from "../types/types.ts";
import SelectedEntityListItem from "./SelectedEntityListItem.tsx";
import EntityListItem from "./EntityListItem.tsx";

export interface EntityProps {
    entity: EntityType
}

function Entity(props: EntityProps) {
    const entity: EntityType = props.entity
    const selected: Boolean = entity.selected
    return selected ? (
        <SelectedEntityListItem entity={entity}/>
    ) : (
        <EntityListItem entity={entity}/>
    );
};

export default Entity

