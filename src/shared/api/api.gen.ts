/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Category entry
 */
export interface CategoryEntry {
  /**
   * Name of the category
   * @example Fruits
   */
  name: string;

  /** @example /shop/categories/Fruits */
  category_url?: string;
}

export type Categories = CategoryEntry[];

/**
 * List of categories
 */
export interface CategoryList {
  categories?: Categories;
}

/**
 * Metadata about a collection of resources.
 */
export interface Meta {
  /**
   * Total number of entries
   * @example 22
   */
  count: number;

  /**
   * How many entries are delivered in one response
   * @example 10
   */
  limit?: number;

  /**
   * Number of the page within the results
   * @example 2
   */
  page?: number;

  /**
   * URL to the previous page of results
   * @example /shop/products/?page=1&limit=10
   */
  previous_url?: string;

  /**
   * URL to the next page of results
   * @example /shop/products/?page=3&limit=10
   */
  next_url?: string;
}

/**
 * Entry of a product collection
 * @example {"name":"Pineapples","product_url":"/shop/products/33"}
 */
export interface ProductEntry {
  /** Name of the product */
  name: string;
  product_url?: string;
}

export type Products = ProductEntry[];

/**
 * Collection of products
 */
export interface ProductList {
  /** Metadata about a collection of resources. */
  meta?: Meta;
  products?: Products;
}

/**
 * Customer details
 * @example {"firstname":"Freddy","lastname":"Meyers"}
 */
export interface Customer {
  /** @example Fred */
  firstname: string;

  /** @example Meyers */
  lastname: string;

  /** Link to the orders of the customer */
  orders_url?: string;

  /** Link to the customer resource */
  customer_url?: string;
}

/**
 * Entry of a collection of customers
 */
export interface CustomerEntry {
  /** @example Susan */
  firstname: string;

  /** @example Tanner */
  lastname: string;

  /** @example /shop/customer/642 */
  customer_url?: string;
}

export type Customers = CustomerEntry[];

/**
 * Collection of customers
 */
export interface CustomerList {
  /** Metadata about a collection of resources. */
  meta?: Meta;
  customers?: Customers;
}

/**
 * Description of a possible action on the resource
 */
export interface ActionDescription {
  /** @example /shop/orders/7959/actions/purchase */
  url?: string;
  method?: 'POST';
}

/**
 * Actions that the order supports
 * @example {"purchase":{"url":"/shop/orders/7959/actions/purchase","method":"POST"}}
 */
export interface Actions {
  /** Description of a possible action on the resource */
  purchase?: ActionDescription;

  /** Description of a possible action on the resource */
  cancel?: ActionDescription;
}

/**
 * Order details
 */
export interface Order {
  /** @format date */
  createdAt?: string;

  /** @format date */
  updatedAt?: string;

  /** State of the order */
  state?: 'created' | 'ordered' | 'delivered' | 'canceled';

  /** @example /shop/customers/342 */
  customer_url?: string;

  /** Actions that the order supports */
  actions: Actions;
  items_url?: string;

  /**
   * Price of a good
   * @example 4.50
   */
  total?: number;
}

/**
 * List entry of an order
 */
export interface OrderEntry {
  /** @format date */
  createdAt?: string;

  /** State of the order */
  state?: 'created' | 'ordered' | 'delivered' | 'canceled';

  /** @example /shop/orders/7832 */
  order_url?: string;
}

export type Orders = OrderEntry[];

/**
 * Collection of orders
 */
export interface OrderList {
  /** Metadata about a collection of resources. */
  meta?: Meta;
  orders?: Orders;
}

/**
 * Product description
 * @example {"name":"Wildberries","price":4.99,"category_url":"/shop/categories/Fruits","vendor_url":"/shop/vendors/672"}
 */
export interface Product {
  /**
   * Name of a product
   * @example Berries
   */
  name?: string;

  /**
   * Price of a good
   * @example 4.50
   */
  price: number;

  /**
   * Category of products e.g. Fruits
   * @example Fruits
   */
  category?: string;
  vendor_url?: string;
  category_url?: string;
  vendor?: number;
  photo_url?: string;
}

/**
 * Vendor of products
 * @example {"name":"Franks Fresh Fruits from France Ltd."}
 */
export interface Vendor {
  /**
   * Name of the vendor
   * @example foo
   */
  name: string;

  /** URL to the products of this vendor */
  products_url?: string;

  /** URL of the vendor */
  vendor_url?: string;
}

/**
 * Listentry of a vendor
 */
export interface VendorEntry {
  /** Name of the vendor */
  name: string;
  vendor_url?: string;
}

export type Vendors = VendorEntry[];

/**
 * Collection of vendors
 */
export interface VendorList {
  /** Metadata about a collection of resources. */
  meta?: Meta;
  vendors?: Vendors;
}

/**
 * Item details
 * @example {"quantity":5,"price":0.9,"item_url":"/shop/orders/1432/items/1","product_url":"/shop/products/3"}
 */
export interface Item {
  /** @example 5 */
  quantity?: number;

  /**
   * Price of a good
   * @example 4.50
   */
  price: number;
  item_url?: string;
  product?: number;
  product_url?: string;
  order_url?: string;
}

/**
 * Collection of items
 */
export type ItemList = Item[];

/**
 * Collection of items
 */
export interface Items {
  /** @example /shop/orders/1432 */
  order_url?: string;

  /** Collection of items */
  items: ItemList;
}

export type File = object;

/**
 * Image of a product
 */
export interface ProductImage {
  file?: File;
}

/**
 * Any properties of the customer can be updated e.g. { "firstname": "Kai" }
 * @example {"firstname":"Fred","lastname":"Meyers"}
 */
export interface CustomerPatch {
  /** @example Fred */
  firstname?: string;

  /** @example Meyers */
  lastname?: string;
}

/**
 * Structure to patch a product. All the properties are optional.
 * @example {"name":"Wildberries","price":4.99,"category_url":"/shop/categories/Fruits","vendor_url":"/shop/vendors/672"}
 */
export interface ProductPatch {
  /**
   * Name of a product
   * @example Berries
   */
  name?: string;

  /**
   * Price of a good
   * @example 4.50
   */
  price?: number;

  /**
   * Category of products e.g. Fruits
   * @example Fruits
   */
  category?: string;
  vendor_url?: string;
  category_url?: string;
  vendor?: number;
}

export interface NamePriceCategory {
  name: string;
  price?: number;
  category?: string;
}

import { ContentType, createHttpApi } from 'effector-http-api';

/**
 * @title Fruit Shop API
 * @version 1.0.0
 * @baseUrl https://api.predic8.de:443/shop
 * @contact Thomas Bayer <bayer@predic8.de> (http://predic8.de)
 *
 * This is a showcase for REST API design and serves as a public API for educational usage.
 */
const http = createHttpApi({ baseURL: 'https://api.predic8.de:443/shop' });

const api = {
  categories: {
    /**
     * No description
     *
     * @tags categories
     * @name GetCategories
     * @summary Lists all the product categories
     * @request GET:/categories/
     */
    getCategories: http.createRoute<void, CategoryList>({
      url: `/categories/`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags categories
     * @name GetCategoriesId
     * @summary Get a category by id
     * @request GET:/categories/{id}
     */
    getCategoriesId: http.createRoute<string, ProductList>(id => ({
      url: `/categories/${id}`,
      method: 'GET'
    }))
  },
  customers: {
    /**
     * No description
     *
     * @tags customers
     * @name GetCustomersId
     * @summary Get a customer by id
     * @request GET:/customers/{id}
     */
    getCustomersId: http.createRoute<number, Customer>(id => ({
      url: `/customers/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags customers
     * @name PutCustomersId
     * @summary Replace a customer by new data
     * @request PUT:/customers/{id}
     */
    putCustomersId: http.createRoute<{ id: number; body: Customer }, Customer>(
      dto => ({
        url: `/customers/${dto.id}`,
        method: 'PUT',
        data: dto.body
      })
    ),

    /**
     * No description
     *
     * @tags customers
     * @name PatchCustomersId
     * @summary Update a customer
     * @request PATCH:/customers/{id}
     */
    patchCustomersId: http.createRoute<
      { id: number; body: CustomerPatch },
      Customer
    >(dto => ({
      url: `/customers/${dto.id}`,
      method: 'PATCH',
      data: dto.body
    })),

    /**
     * No description
     *
     * @tags customers
     * @name DeleteCustomersId
     * @summary Delete a customer
     * @request DELETE:/customers/{id}
     */
    deleteCustomersId: http.createRoute<number, any>(id => ({
      url: `/customers/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags customers
     * @name GetCustomers
     * @summary Lists all the customers
     * @request GET:/customers/
     */
    getCustomers: http.createRoute<void, CustomerList>({
      url: `/customers/`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags customers
     * @name PostCustomers
     * @summary Create a customer
     * @request POST:/customers/
     */
    postCustomers: http.createRoute<Customer, Customer>({
      url: `/customers/`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags customers
     * @name GetCustomersIdOrders
     * @summary Get the orders of a customer
     * @request GET:/customers/{id}/orders/
     */
    getCustomersIdOrders: http.createRoute<number, OrderList>(id => ({
      url: `/customers/${id}/orders/`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags customers
     * @name PostCustomersIdOrders
     * @summary Create an order for a customer
     * @request POST:/customers/{id}/orders/
     */
    postCustomersIdOrders: http.createRoute<number, Order>(id => ({
      url: `/customers/${id}/orders/`,
      method: 'POST'
    }))
  },
  orders: {
    /**
     * No description
     *
     * @tags orders
     * @name GetOrdersId
     * @summary Get an order by id
     * @request GET:/orders/{id}
     */
    getOrdersId: http.createRoute<number, Order>(id => ({
      url: `/orders/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags orders
     * @name DeleteOrdersId
     * @summary Delete an order
     * @request DELETE:/orders/{id}
     */
    deleteOrdersId: http.createRoute<number, any>(id => ({
      url: `/orders/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags orders
     * @name GetOrders
     * @summary Lists all the orders
     * @request GET:/orders/
     */
    getOrders: http.createRoute<
      {
        page?: number;
        limit?: number;
        state?: 'created' | 'ordered' | 'delivered' | 'canceled';
      },
      OrderList
    >({
      url: `/orders/`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags orders
     * @name GetOrdersIdItems
     * @summary Get the items of an order
     * @request GET:/orders/{id}/items/
     */
    getOrdersIdItems: http.createRoute<number, Items>(id => ({
      url: `/orders/${id}/items/`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags orders
     * @name PostOrdersIdItems
     * @summary Add an item to an order
     * @request POST:/orders/{id}/items/
     */
    postOrdersIdItems: http.createRoute<{ id: number; body: Item }, Item>(
      dto => ({
        url: `/orders/${dto.id}/items/`,
        method: 'POST',
        data: dto.body
      })
    ),

    /**
     * No description
     *
     * @tags orders
     * @name GetOrdersOidItemsIid
     * @summary Get an item of an order
     * @request GET:/orders/{oid}/items/{iid}
     */
    getOrdersOidItemsIid: http.createRoute<{ oid: number; iid: number }, Item>(
      dto => ({
        url: `/orders/${dto.oid}/items/${dto.iid}`,
        method: 'GET'
      })
    ),

    /**
     * No description
     *
     * @tags orders
     * @name DeleteOrdersOidItemsIid
     * @summary Delete an item of an order
     * @request DELETE:/orders/{oid}/items/{iid}
     */
    deleteOrdersOidItemsIid: http.createRoute<
      { oid: number; iid: number },
      any
    >(dto => ({
      url: `/orders/${dto.oid}/items/${dto.iid}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags orders
     * @name PostOrdersIdActionsPurchase
     * @summary Purchase an order
     * @request POST:/orders/{id}/actions/purchase
     */
    postOrdersIdActionsPurchase: http.createRoute<number, any>(id => ({
      url: `/orders/${id}/actions/purchase`,
      method: 'POST'
    })),

    /**
     * No description
     *
     * @tags orders
     * @name PostOrdersIdActionsCancel
     * @summary Cancel an order
     * @request POST:/orders/{id}/actions/cancel
     */
    postOrdersIdActionsCancel: http.createRoute<number, any>(id => ({
      url: `/orders/${id}/actions/cancel`,
      method: 'POST'
    }))
  },
  products: {
    /**
     * No description
     *
     * @tags products
     * @name GetProductsId
     * @summary Get a product by id
     * @request GET:/products/{id}
     */
    getProductsId: http.createRoute<number, Product>(id => ({
      url: `/products/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags products
     * @name PutProductsId
     * @summary Replace a product by new data
     * @request PUT:/products/{id}
     */
    putProductsId: http.createRoute<{ id: number; body: Product }, Product>(
      dto => ({
        url: `/products/${dto.id}`,
        method: 'PUT',
        data: dto.body
      })
    ),

    /**
     * No description
     *
     * @tags products
     * @name PatchProductsId
     * @summary Update one or more properties of a product
     * @request PATCH:/products/{id}
     */
    patchProductsId: http.createRoute<
      { id: number; body: ProductPatch },
      Product
    >(dto => ({
      url: `/products/${dto.id}`,
      method: 'PATCH',
      data: dto.body
    })),

    /**
     * No description
     *
     * @tags products
     * @name DeleteProductsId
     * @summary Delete a product
     * @request DELETE:/products/{id}
     */
    deleteProductsId: http.createRoute<number, any>(id => ({
      url: `/products/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags products
     * @name GetProducts
     * @summary Lists all the products
     * @request GET:/products/
     */
    getProducts: http.createRoute<void, ProductList>({
      url: `/products/`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags products
     * @name PostProducts
     * @summary Create a product
     * @request POST:/products/
     */
    postProducts: http.createRoute<Product, any>({
      url: `/products/`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags products
     * @name GetProductsIdPhoto
     * @summary Get a photo of a product
     * @request GET:/products/{id}/photo
     */
    getProductsIdPhoto: http.createRoute<number, any>(id => ({
      url: `/products/${id}/photo`,
      method: 'GET'
    })),

    /**
     * @description Length of the image is limited to 512 KBytes.
     *
     * @tags products
     * @name PutProductsIdPhoto
     * @summary Add or update the photo of a product
     * @request PUT:/products/{id}/photo
     */
    putProductsIdPhoto: http.createRoute<
      { id: number; body: ProductImage },
      Product
    >(dto => ({
      url: `/products/${dto.id}/photo`,
      method: 'PUT',
      data: dto.body,
      type: ContentType.FormData
    }))
  },
  vendors: {
    /**
     * No description
     *
     * @tags vendors
     * @name GetVendorsId
     * @summary Get a vendor by id
     * @request GET:/vendors/{id}
     */
    getVendorsId: http.createRoute<number, Vendor>(id => ({
      url: `/vendors/${id}`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags vendors
     * @name PutVendorsId
     * @summary Replace a vendor by new data
     * @request PUT:/vendors/{id}
     */
    putVendorsId: http.createRoute<number, any>(id => ({
      url: `/vendors/${id}`,
      method: 'PUT'
    })),

    /**
     * No description
     *
     * @tags vendors
     * @name PatchVendorsId
     * @summary Update a vendor
     * @request PATCH:/vendors/{id}
     */
    patchVendorsId: http.createRoute<number, any>(id => ({
      url: `/vendors/${id}`,
      method: 'PATCH'
    })),

    /**
     * No description
     *
     * @tags vendors
     * @name DeleteVendorsId
     * @summary Delete a vendor
     * @request DELETE:/vendors/{id}
     */
    deleteVendorsId: http.createRoute<number, any>(id => ({
      url: `/vendors/${id}`,
      method: 'DELETE'
    })),

    /**
     * No description
     *
     * @tags vendors
     * @name GetVendors
     * @summary Lists all the vendors
     * @request GET:/vendors/
     */
    getVendors: http.createRoute<void, VendorList>({
      url: `/vendors/`,
      method: 'GET'
    }),

    /**
     * No description
     *
     * @tags vendors
     * @name PostVendors
     * @summary Create a vendor
     * @request POST:/vendors/
     */
    postVendors: http.createRoute<Vendor, Vendor>({
      url: `/vendors/`,
      method: 'POST'
    }),

    /**
     * No description
     *
     * @tags vendors
     * @name GetVendorsIdProducts
     * @summary Get the products of a vendor
     * @request GET:/vendors/{id}/products/
     */
    getVendorsIdProducts: http.createRoute<number, any>(id => ({
      url: `/vendors/${id}/products/`,
      method: 'GET'
    })),

    /**
     * No description
     *
     * @tags vendors
     * @name PostVendorsIdProducts
     * @summary Add a product to a vendor
     * @request POST:/vendors/{id}/products/
     */
    postVendorsIdProducts: http.createRoute<
      { id: number; body: NamePriceCategory },
      any
    >(dto => ({
      url: `/vendors/${dto.id}/products/`,
      method: 'POST',
      data: dto.body
    }))
  }
};

export { http, api };
