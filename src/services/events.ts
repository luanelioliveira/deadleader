import events from '../data/events';

import { Event } from '../types/Event';

export async function getEventById(eventId: string): Promise<Event> {
  return events.find((event) => event.id === eventId);
}
