import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface ZeroconfService {
    domain: string;
    type: string;
    name: string;
    port: number;
    hostname: string;
    ipv4Addresses: string[];
    ipv6Addresses: string[];
    txtRecord: any;
}
export interface ZeroconfResult {
    action: 'registered' | 'added' | 'removed' | 'resolved';
    service: ZeroconfService;
}
/**
 * @name Zeroconf
 * @description
 * This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.
 * @usage
 * ```typescript
 * import { Zeroconf } from '@awesome-cordova-plugins/zeroconf/ngx';
 *
 * constructor(private zeroconf: Zeroconf) { }
 *
 * ...
 *
 * // watch for services of a specified type
 * this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
 *   if (result.action == 'added') {
 *     console.log('service added', result.service);
 *   } else {
 *     console.log('service removed', result.service);
 *   }
 * });
 *
 * // publish a zeroconf service of your own
 * this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
 *   'foo': 'bar'
 * }).then(result => {
 *   console.log('Service registered', result.service);
 * });
 *
 *
 * // unregister your service
 * this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
 * ```
 */
export declare class ZeroconfOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Returns this device's hostname.
     *
     * @returns {Promise<string>}
     */
    getHostname(): Promise<string>;
    /**
     * Publishes a new service.
     *
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @returns {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult>;
    /**
     * Unregisters a service.
     *
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @returns {Promise<void>}
     */
    unregister(type: string, domain: string, name: string): Promise<void>;
    /**
     * Unregisters all published services.
     *
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Starts watching for services of the specified type.
     *
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @returns {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    watch(type: string, domain: string): Observable<ZeroconfResult>;
    /**
     * Stops watching for services of the specified type.
     *
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @returns {Promise<void>}
     */
    unwatch(type: string, domain: string): Promise<void>;
    /**
     * Closes the service browser and stops watching.
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Re-initializes the plugin to clean service & browser state.
     *
     * @returns {Promise<void>}
     */
    reInit(): Promise<void>;
    /**
     * Family of addresses to register: ipv4, ipv6 or any.
     */
    registerAddressFamily: 'ipv4' | 'ipv6' | 'any';
    /**
     * Family of addresses to watch for: ipv4, ipv6 or any.
     */
    watchAddressFamily: 'ipv4' | 'ipv6' | 'any';
}

export declare const Zeroconf: ZeroconfOriginal;