/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppChat {
    }
    interface AppHome {
        "fetchProducts": () => Promise<void>;
    }
    interface AppListProduct {
        "fetchProducts": () => Promise<void>;
    }
    interface AppProduct {
        "price": number;
        "tiles": string;
    }
    interface AppProductAdd {
    }
    interface AppRoot {
    }
    interface ChatMessage {
        "message": string;
    }
    interface ChatMessageAdd {
    }
    interface WebSocket {
    }
}
declare global {
    interface HTMLAppChatElement extends Components.AppChat, HTMLStencilElement {
    }
    var HTMLAppChatElement: {
        prototype: HTMLAppChatElement;
        new (): HTMLAppChatElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppListProductElement extends Components.AppListProduct, HTMLStencilElement {
    }
    var HTMLAppListProductElement: {
        prototype: HTMLAppListProductElement;
        new (): HTMLAppListProductElement;
    };
    interface HTMLAppProductElement extends Components.AppProduct, HTMLStencilElement {
    }
    var HTMLAppProductElement: {
        prototype: HTMLAppProductElement;
        new (): HTMLAppProductElement;
    };
    interface HTMLAppProductAddElement extends Components.AppProductAdd, HTMLStencilElement {
    }
    var HTMLAppProductAddElement: {
        prototype: HTMLAppProductAddElement;
        new (): HTMLAppProductAddElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLChatMessageElement extends Components.ChatMessage, HTMLStencilElement {
    }
    var HTMLChatMessageElement: {
        prototype: HTMLChatMessageElement;
        new (): HTMLChatMessageElement;
    };
    interface HTMLChatMessageAddElement extends Components.ChatMessageAdd, HTMLStencilElement {
    }
    var HTMLChatMessageAddElement: {
        prototype: HTMLChatMessageAddElement;
        new (): HTMLChatMessageAddElement;
    };
    interface HTMLWebSocketElement extends Components.WebSocket, HTMLStencilElement {
    }
    var HTMLWebSocketElement: {
        prototype: HTMLWebSocketElement;
        new (): HTMLWebSocketElement;
    };
    interface HTMLElementTagNameMap {
        "app-chat": HTMLAppChatElement;
        "app-home": HTMLAppHomeElement;
        "app-list-product": HTMLAppListProductElement;
        "app-product": HTMLAppProductElement;
        "app-product-add": HTMLAppProductAddElement;
        "app-root": HTMLAppRootElement;
        "chat-message": HTMLChatMessageElement;
        "chat-message-add": HTMLChatMessageAddElement;
        "web-socket": HTMLWebSocketElement;
    }
}
declare namespace LocalJSX {
    interface AppChat {
    }
    interface AppHome {
    }
    interface AppListProduct {
    }
    interface AppProduct {
        "price"?: number;
        "tiles"?: string;
    }
    interface AppProductAdd {
    }
    interface AppRoot {
    }
    interface ChatMessage {
        "message"?: string;
    }
    interface ChatMessageAdd {
        "onSendMessage"?: (event: CustomEvent<string>) => void;
    }
    interface WebSocket {
    }
    interface IntrinsicElements {
        "app-chat": AppChat;
        "app-home": AppHome;
        "app-list-product": AppListProduct;
        "app-product": AppProduct;
        "app-product-add": AppProductAdd;
        "app-root": AppRoot;
        "chat-message": ChatMessage;
        "chat-message-add": ChatMessageAdd;
        "web-socket": WebSocket;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-chat": LocalJSX.AppChat & JSXBase.HTMLAttributes<HTMLAppChatElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-list-product": LocalJSX.AppListProduct & JSXBase.HTMLAttributes<HTMLAppListProductElement>;
            "app-product": LocalJSX.AppProduct & JSXBase.HTMLAttributes<HTMLAppProductElement>;
            "app-product-add": LocalJSX.AppProductAdd & JSXBase.HTMLAttributes<HTMLAppProductAddElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "chat-message": LocalJSX.ChatMessage & JSXBase.HTMLAttributes<HTMLChatMessageElement>;
            "chat-message-add": LocalJSX.ChatMessageAdd & JSXBase.HTMLAttributes<HTMLChatMessageAddElement>;
            "web-socket": LocalJSX.WebSocket & JSXBase.HTMLAttributes<HTMLWebSocketElement>;
        }
    }
}
