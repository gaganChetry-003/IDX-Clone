

import { create } from 'zustand'


export const useActiveFileTabStore = create((set) => {

    return {
        activFileTab: null,
        setActiveFileTab: (path, value, extension) => {
            set({
                activeFileTab: {
                    path: path,
                    value: value,
                    extension: extension
                }

            })

        }

    }

});

