import {
    ReactNode,
    Fragment
} from "react";
import LocaleContextInheritance from "./locale";
import ThemeContextInheritance from "./theme";
import ModalContextInheritance from "./modal";
import light from "../theme/variants/light";
import {
    en,
    tr
} from "../locales";
import {
    IOCoreContextConfigType,
    LanguageType,
    ThemeType
} from "../../types";
import {
    Host
} from "../../packages/react-portalize/src";
import {
    Dialog
} from "../../components";

class Context {
    ThemeContext: ThemeContextInheritance<ThemeType>;
    LocaleContext: LocaleContextInheritance<LanguageType>;
    ModalContext: ModalContextInheritance;

    constructor(config: IOCoreContextConfigType) {
        this.ThemeContext = new ThemeContextInheritance(
            {
                initialThemeKey: "light",
                ...light,
                ...light.designTokens,
            },
            {
                ...config,
                key: "IOCoreTheme"
            }
        );

        this.LocaleContext = new LocaleContextInheritance(
            {
                initialLanguage: "en",
                locales: [
                    en,
                    tr
                ]
            },
            {
                ...config,
                key: "IOCoreLocale"
            }
        );

        this.ModalContext = new ModalContextInheritance(
            [],
            {
                ...config,
                key: "IOCoreModal"
            }
        );
    }

    ContextAPI = ({
        children
    }: {
        children: ReactNode;
    }) => {
        const {
            data
        } = this.ModalContext.ModalStateContext.useContext();

        return <Fragment>
            <Host>
                {children}
                {
                    data && data.length ? data.map(modal => {
                        return <Dialog
                            {...modal}
                        />;
                    }) : null
                }
            </Host>
        </Fragment>;
    };

    Provider = ({
        children
    }: {
        children: ReactNode
    }) => {
        const ModalContext = this.ModalContext;
        const LocaleContext = this.LocaleContext;
        const ThemeContext = this.ThemeContext;

        return <ThemeContext.Provider>
            <LocaleContext.Provider>
                <ModalContext.Render>
                    <this.ContextAPI>
                        {children}
                    </this.ContextAPI>
                </ModalContext.Render>
            </LocaleContext.Provider>
        </ThemeContext.Provider>;
    };
};
export default Context;
