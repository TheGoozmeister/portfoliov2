import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ProjectState {
    projectId: number;
    filteredProjects: Project[];
    technoKeywords: string[];
    toolKeywords: string[];
    tags: string[];
    currentSearch: string;
}

interface Project {
    id: number;
    title: string;
    cover: string;
    description: string;
    technos: string[];
    summary: string;
    projectLink: string;
}

const initialState = {
    projectId: 1,
    filteredProjects: [],
    technoKeywords: [],
    toolKeywords: [],
    tags: [],
    currentSearch: "",
} as ProjectState

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers : {
        changeProject(state: ProjectState, action: PayloadAction<number>) {
            state.projectId = action.payload
        },
        addFilteredProject(state: ProjectState, action: PayloadAction<Project[]>) {
            state.filteredProjects = action.payload;
        },
        addTag(state: ProjectState, action: PayloadAction<string>) {
            state.tags.push(action.payload);
        },
        removeTag(state: ProjectState, action: PayloadAction<string>) {
            state.tags = state.tags.filter(tag => tag !== action.payload);
        },
        setTechnoKeywords(state: ProjectState, action: PayloadAction<string[]>) {
            state.technoKeywords = action.payload;
        },
        addTechnoKeyword(state: ProjectState, action: PayloadAction<string>) {
            state.technoKeywords.push(action.payload);
        },
        removeTechnoKeyword(state: ProjectState, action: PayloadAction<string>) {
            state.technoKeywords = state.technoKeywords.filter(keyword=> keyword !== action.payload);
        },
        addToolKeyword(state: ProjectState, action: PayloadAction<string>) {
            state.toolKeywords.push(action.payload);
        },
        removeToolKeyword(state: ProjectState, action: PayloadAction<string>) {
            state.toolKeywords = state.toolKeywords.filter(keyword=> keyword !== action.payload);
        },
        setToolKeywords(state: ProjectState, action: PayloadAction<string[]>) {
            state.toolKeywords = action.payload;
        },
        setCurrentSearch(state: ProjectState, action: PayloadAction<string>) {
            state.currentSearch = action.payload;
        }
    }
})

export const {changeProject, addFilteredProject, addTag, removeTag, addTechnoKeyword, removeTechnoKeyword, addToolKeyword, removeToolKeyword, setTechnoKeywords,setToolKeywords, setCurrentSearch} = projectSlice.actions;
export default projectSlice.reducer;