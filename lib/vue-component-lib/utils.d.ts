export interface InputProps<T> {
    modelValue?: T;
}
export declare const defineContainer: <Props, VModelType = string | number | boolean>(name: string, defineCustomElement: any, componentProps?: string[], modelProp?: string, modelUpdateEvent?: string | undefined, externalModelUpdateEvent?: string | undefined) => import("vue").DefineComponent<Props & InputProps<VModelType>, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<Props & InputProps<VModelType> extends import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> & Props & InputProps<VModelType>> : Props & InputProps<VModelType>>, import("vue").ExtractDefaultPropTypes<Props & InputProps<VModelType>>>;
