// import reactLogo from './assets/react.svg'
// import kardioLogo from '/kardio.svg'
import './styles/App.css'
import {EntityType} from './types/types';
import {connect} from 'react-redux';
import Entity from './components/Entity.tsx';
import Menu from './components/Menu.tsx';
import {RootState} from './store/store';
import {useEffect, useState} from "react";

type sortedEntitiesType = {
    sorted: EntityType[]
}


function App(props: sortedEntitiesType) {
    const entities: EntityType[] = props.sorted
    const [searchString, setSearchString] = useState('');
    const [filteredEntities, setFilteredEntities] = useState([...entities])
    useEffect(() => {
        setFilteredEntities([...entities].filter((entity) => entity.title.toLowerCase().includes(searchString.toLowerCase())))
    }, [searchString, entities]);
    return (
        <div className="flex flex-col content-center w-full items-center">
            <Menu
                searchString={searchString}
                handleSearch={(e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)}
            />
            <ul className="justify-center max-w-md w-full">
                {filteredEntities.map((entity: EntityType) => (
                    <Entity entity={entity} key={entity.id + searchString} />
                ))}
            </ul>
        </div>
    )
}


const mapStateToProps = (state: RootState) => {
    const sortedEntities: EntityType[] = [...state.entity].sort((a, b) => a.subtitle.substring(0, 1).localeCompare(b.subtitle.substring(0, 1)))
    return {sorted: sortedEntities}
}

export default connect(mapStateToProps)(App)
