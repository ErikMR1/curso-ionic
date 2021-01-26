import { ColorsService } from "../services/colors.service"

export interface ColorsResponse{
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data:Color[];
}
export interface ColorResponse{
    data:ColorsService;
}

export interface Color{
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string;
}