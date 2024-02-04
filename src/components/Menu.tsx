import {clsx} from 'clsx';
import {useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../hooks.ts";
import {addEntity} from "../store/entitySlice.ts";


type searchProps = {
    searchString: string,
    handleSearch: Function,
}

function Menu(props: searchProps) {
    const searchString: string = props.searchString

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        props.handleSearch(event)
    }


    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [active, setActive] = useState(false)
    const dropdownMenu: React.MutableRefObject<null> = useRef(null)


    const dispatch = useAppDispatch()
    const handleAddEntity = () => {
        if (title !== '' && subtitle !== ''){
            dispatch(addEntity({title, subtitle}));
        }
        setTitle('');
        setSubTitle('');
    }
    const setInactive = (event: any) => {
        // @ts-ignore
        if (active && !dropdownMenu.current?.contains(event.target)) {
            setActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', setInactive, true);
        return () => {
            document.removeEventListener('click', setInactive, true);
        };
    }, [active]);

    return (
        <div className="m-4 relative" ref={dropdownMenu}>
            <button
                className="select-none text-sm px-5 py-2.5 text-center inline-flex items-center rounded-lg shadow-lg border border-[#D5D5D5] p-2 hover:bg-[#f9fafb] font-bold"
                type="button"
                onClick={() => {
                    setActive(!active)
                }}>
                Aðgerðir
            </button>
            <div
                className={clsx(
                    'z-10 bg-white rounded-lg shadow w-60 absolute',
                    {
                        'hidden': !active,
                    },
                )}
                style={{left: "-70px"}}
            >
                <div className="p-3">
                    <label
                        htmlFor="input-group-search"
                        className="sr-only">Search</label>
                    <div className="relative">
                        <div
                            className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text"
                               value={searchString}
                               onChange={handleChange}
                               className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Leita" />
                    </div>
                </div>
                <div>
                    <form className="p-3 space-y-2">
                        <div className="relative">
                            <div
                                className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nafn" />
                        </div>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={subtitle}
                                onChange={e => setSubTitle(e.target.value)}
                                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Netfang" />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="select-none text-sm px-5 py-2.5 text-center inline-flex items-center rounded-lg shadow-lg border border-[#D5D5D5] p-2 hover:bg-[#f9fafb] font-bold"
                                type="button"
                                onClick={handleAddEntity}>
                                Bæta við
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Menu