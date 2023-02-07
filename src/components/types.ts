export interface Product {
    id: number;
    name: string;
    attributes: (Color | Size | Weight)[];
}

// Выделила в ProductAttr общие поля
export interface ProductAttr {
    id: number;
    code: string;
    name: string;
}

export interface Color extends ProductAttr {
    color: string;
}

export interface Size extends ProductAttr {
    size: {
        width: number;
        height: number;
    }
}

export interface Weight extends ProductAttr {
    weight: number
}

