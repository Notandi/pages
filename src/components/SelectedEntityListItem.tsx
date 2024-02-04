import {EntityType} from "../types/types.ts";
import {useAppDispatch} from "../hooks.ts";
import {removeEntity, selectEntity} from "../store/entitySlice.ts";

export interface EntityProps {
    entity: EntityType,
}

function SelectedEntityListItem(props: EntityProps) {

    const entity: EntityType = props.entity

    const dispatch = useAppDispatch()
    const handleSelected = () => {
        dispatch(selectEntity(entity.id))
    }
    const handleRemoveEntity = () => {
        dispatch(removeEntity(entity.id))
    }
    return (
        <div
            className="absolute z-50 backdrop-blur	h-full w-full top-0 left-0 flex flex-col content-center items-center justify-center">
            <ul className="justify-center max-w-md w-full">
                <li className="bg-white h-fit  space-x-4 space-y-4 rounded-lg shadow-lg border border-[#D5D5D5]">
                    <div className="flex space-y-4 items-center flex-col h-full p-4 ">
                        <div
                            className="p-4 shadow-sm bg-[#C9E4DE]  w-16 h-16 rounded-lg flex justify-center items-center">
                            <i className="text-3xl"> {entity.icon} </i>
                        </div>
                        <div className="flex flex-col  min-w-0">
                            <p className="text-sm text-center font-medium text-gray-900 truncate">
                                {entity.title}
                            </p>
                            <p className="text-sm text-center text-gray-500 truncate dark:text-gray-400">
                                {entity.subtitle}
                            </p>
                        </div>
                        <div className="flex space-x-4 flex-row">
                            <button
                                className="select-none text-sm px-5 py-2.5 text-center inline-flex items-center rounded-lg shadow-lg border border-[#D5D5D5] p-2 hover:bg-[#f9fafb] font-bold"
                                type="button"
                                onClick={handleSelected}>
                                Til Baka
                            </button>
                            <button
                                className="select-none text-sm px-5 py-2.5 text-center inline-flex items-center rounded-lg shadow-lg border border-[#D5D5D5] p-2 hover:bg-[#f9fafb] font-bold"
                                type="button"
                                onClick={handleRemoveEntity}>
                                Eyða
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SelectedEntityListItem

