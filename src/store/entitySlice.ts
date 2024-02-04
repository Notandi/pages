import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EntityType, EntityToAddType} from '../types/types';
import {initialEntityState} from "../utils/uitls.ts";

const initialState: EntityType[] = initialEntityState;

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {
        addEntity: (state, action: PayloadAction<EntityToAddType>) => {
            const title: string = action.payload.title;
            const subtitle: string = action.payload.subtitle
            const newEntity: EntityType = {
                id: Date.now(),
                icon: title.substring(0, 1).toUpperCase(),
                title: title,
                subtitle: subtitle,
                selected: false,
            }
            state.push(newEntity)
        },
        removeEntity: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((entity) => entity.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        selectEntity: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((entity) => entity.id === action.payload);
            if (!state[index].selected) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = ""
            }
            state[index].selected = !state[index].selected
        },
    }
})

export const {addEntity, removeEntity, selectEntity} = entitySlice.actions

export default entitySlice.reducer