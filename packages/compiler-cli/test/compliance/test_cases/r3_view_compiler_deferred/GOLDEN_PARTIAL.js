/****************************************************************************************************
 * PARTIAL FILE: basic_deferred.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
    constructor() {
        this.message = 'hello';
    }
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    <div>
      {{message}}
      {#defer}Deferred content{/defer}
    </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    <div>
      {{message}}
      {#defer}Deferred content{/defer}
    </div>
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: basic_deferred.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    message: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_secondary_blocks.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
    constructor() {
        this.message = 'hello';
        this.loadingMessage = 'Calendar is loading';
    }
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    <div>
      {{message}}
      {#defer}
        <calendar-cmp/>
        {:loading} {{loadingMessage}}
        {:placeholder} <img src="loading.gif">
        {:error} Calendar failed to load <icon>sad</icon>
      {/defer}
    </div>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    <div>
      {{message}}
      {#defer}
        <calendar-cmp/>
        {:loading} {{loadingMessage}}
        {:placeholder} <img src="loading.gif">
        {:error} Calendar failed to load <icon>sad</icon>
      {/defer}
    </div>
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_secondary_blocks.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    message: string;
    loadingMessage: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_placeholder_params.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    {#defer}
      <calendar-cmp/>
      {:placeholder minimum 2s} <img src="placeholder.gif">
    {/defer}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    {#defer}
      <calendar-cmp/>
      {:placeholder minimum 2s} <img src="placeholder.gif">
    {/defer}
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_placeholder_params.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_loading_params.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    {#defer}
      <calendar-cmp/>
      {:loading minimum 2s; after 500ms} <img src="loading.gif">
    {/defer}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    {#defer}
      <calendar-cmp/>
      {:loading minimum 2s; after 500ms} <img src="loading.gif">
    {/defer}
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_loading_params.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_local_deps.js
 ****************************************************************************************************/
import { Component, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class EagerDep {
}
EagerDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EagerDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: EagerDep, isStandalone: true, selector: "eager-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, decorators: [{
            type: Directive,
            args: [{ selector: 'eager-dep', standalone: true }]
        }] });
export class LazyDep {
}
LazyDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LazyDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LazyDep, isStandalone: true, selector: "lazy-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, decorators: [{
            type: Directive,
            args: [{ selector: 'lazy-dep', standalone: true }]
        }] });
export class LoadingDep {
}
LoadingDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LoadingDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LoadingDep, isStandalone: true, selector: "loading-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, decorators: [{
            type: Directive,
            args: [{ selector: 'loading-dep', standalone: true }]
        }] });
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
    <div>
      <eager-dep/>
      {#defer}
        <lazy-dep/>
        {:loading} <loading-dep/>
      {/defer}
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: EagerDep, selector: "eager-dep" }, { kind: "directive", type: LoadingDep, selector: "loading-dep" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    <div>
      <eager-dep/>
      {#defer}
        <lazy-dep/>
        {:loading} <loading-dep/>
      {/defer}
    </div>
  `,
                    standalone: true,
                    imports: [EagerDep, LazyDep, LoadingDep],
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_local_deps.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class EagerDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<EagerDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EagerDep, "eager-dep", never, {}, {}, never, never, true, never>;
}
export declare class LazyDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<LazyDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LazyDep, "lazy-dep", never, {}, {}, never, never, true, never>;
}
export declare class LoadingDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoadingDep, "loading-dep", never, {}, {}, never, never, true, never>;
}
export declare class MyApp {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, true, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_eager.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class EagerDep {
}
EagerDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EagerDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: EagerDep, isStandalone: true, selector: "eager-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: EagerDep, decorators: [{
            type: Directive,
            args: [{ selector: 'eager-dep', standalone: true }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_eager.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class EagerDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<EagerDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EagerDep, "eager-dep", never, {}, {}, never, never, true, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_lazy.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class LazyDep {
}
LazyDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LazyDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LazyDep, isStandalone: true, selector: "lazy-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LazyDep, decorators: [{
            type: Directive,
            args: [{ selector: 'lazy-dep', standalone: true }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_lazy.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class LazyDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<LazyDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LazyDep, "lazy-dep", never, {}, {}, never, never, true, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_loading.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class LoadingDep {
}
LoadingDep.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LoadingDep.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: LoadingDep, isStandalone: true, selector: "loading-dep", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: LoadingDep, decorators: [{
            type: Directive,
            args: [{ selector: 'loading-dep', standalone: true }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps_loading.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class LoadingDep {
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingDep, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoadingDep, "loading-dep", never, {}, {}, never, never, true, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import { EagerDep } from './deferred_with_external_deps_eager';
import { LazyDep } from './deferred_with_external_deps_lazy';
import { LoadingDep } from './deferred_with_external_deps_loading';
import * as i0 from "@angular/core";
export class MyApp {
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
    <div>
      <eager-dep/>
      {#defer}
        <lazy-dep/>
        {:loading} <loading-dep/>
      {/defer}
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: EagerDep, selector: "eager-dep" }, { kind: "directive", type: LoadingDep, selector: "loading-dep" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    <div>
      <eager-dep/>
      {#defer}
        <lazy-dep/>
        {:loading} <loading-dep/>
      {/defer}
    </div>
  `,
                    standalone: true,
                    imports: [EagerDep, LazyDep, LoadingDep],
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_external_deps.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, true, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_triggers.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
    constructor() {
        this.message = 'hello';
        this.isReady = true;
    }
    isVisible() {
        return false;
    }
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    {{message}}
    {#defer when isVisible() || isReady; on idle, timer(1337); on immediate, hover;
      on interaction(button); on viewport(button)}
    {{message}}
    {:placeholder}<button #button>Click me</button>
  {/defer}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    {{message}}
    {#defer when isVisible() || isReady; on idle, timer(1337); on immediate, hover;
      on interaction(button); on viewport(button)}
    {{message}}
    {:placeholder}<button #button>Click me</button>
  {/defer}
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_triggers.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    message: string;
    isReady: boolean;
    isVisible(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_prefetch_triggers.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class MyApp {
    constructor() {
        this.message = 'hello';
        this.isReady = true;
    }
    isVisible() {
        return false;
    }
}
MyApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyApp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "0.0.0-PLACEHOLDER", type: MyApp, selector: "ng-component", ngImport: i0, template: `
    {{message}}
    {#defer prefetch when isVisible() || isReady; prefetch on idle, timer(1337);
      prefetch on immediate, hover; prefetch on interaction(button); prefetch on viewport(button)}
    {{message}}
    {:placeholder}<button #button>Click me</button>
  {/defer}
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: MyApp, decorators: [{
            type: Component,
            args: [{
                    template: `
    {{message}}
    {#defer prefetch when isVisible() || isReady; prefetch on idle, timer(1337);
      prefetch on immediate, hover; prefetch on interaction(button); prefetch on viewport(button)}
    {{message}}
    {:placeholder}<button #button>Click me</button>
  {/defer}
  `,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: deferred_with_prefetch_triggers.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class MyApp {
    message: string;
    isReady: boolean;
    isVisible(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyApp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyApp, "ng-component", never, {}, {}, never, never, false, never>;
}

