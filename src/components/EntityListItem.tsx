import {EntityType} from "../types/types.ts";
import {useAppDispatch} from "../hooks.ts";
import {selectEntity} from "../store/entitySlice.ts";

export interface EntityProps {
    entity: EntityType,
}

function EntityListItem(props: EntityProps) {

    const dispatch = useAppDispatch()
    const handleSelected = () => {
        dispatch(selectEntity(entity.id))
    }
    const entity: EntityType = props.entity
    return (
        <li className="pb-2 px-2 hover:bg-[#f9fafb] cursor-pointer select-none" onClick={handleSelected}>
            <div className="flex items-center space-x-4 rounded-lg shadow-lg border border-[#D5D5D5] p-2">
                <div className="p-4 shadow-sm bg-[#C9E4DE]  w-16 h-16 rounded-lg flex justify-center items-center">
                    <i className="text-3xl"> {entity.icon} </i>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm text-start font-medium text-gray-900 truncate">
                        {entity.title}
                    </p>
                    <p className="text-sm text-start text-gray-500 truncate dark:text-gray-400">
                        {entity.subtitle}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default EntityListItem

