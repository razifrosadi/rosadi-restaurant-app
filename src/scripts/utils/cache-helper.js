import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    let response = await caches.match(request);

    if (!response) {
      response = await this._fetchRequest(request);
    }

    return response;
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchRequest(request) {
    try {
      const response = await fetch(request);

      if (!response || response.status !== 200) {
        return response;
      }

      await this._addCache(request.clone());
      return response;
    } catch (error) {
      console.error('Error fetching request:', error);
      throw error;
    }
  },

  async _addCache(request) {
    const cache = await this._openCache();
    await cache.add(request);
  },
};

export default CacheHelper;
