"use client";

import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalWrapper/ModalRoot";
import { useAppContext } from "@/AppContext/AppContextProvider";
import { MapPin, Users, BookOpen, Clock } from "lucide-react";
import { Input } from "../ui/input";

const SearchModalRoot = () => {
  const { OpenSearchModal, handleOpenSearchModal } = useAppContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);



  
  useEffect(() => {
    if (!searchQuery) {
      setUniversities([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/universities?search=${searchQuery}`);
        const data = await res.json();
        setUniversities(data?.universities || []);
      } catch (error) {
        console.error("Error fetching universities:", error);
      } finally {
        setLoading(false);
      }
    }, 100); // 6 second delay

    return () => clearTimeout(timer); // cleanup if user types before 6s
  }, [searchQuery]);

  return (
    <ModalRoot isOpen={OpenSearchModal} onClose={handleOpenSearchModal}>
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search for universities..."
        className="my-6"
        value={searchQuery}
      />

      <div>
        {loading && <p className="text-gray-500">Loading results...</p>}

        {!loading &&
          universities?.map((uni) => (
            <div
              key={uni.name}
              className="p-4 mb-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2">{uni.name}</h2>
              <p className="text-gray-600 mb-1">
                <MapPin className="inline-block mr-2" /> {uni.location}
              </p>
              <p className="text-gray-600 mb-1">
                <Users className="inline-block mr-2" /> Students: {uni.students}
              </p>
              <p className="text-gray-600 mb-1">
                <BookOpen className="inline-block mr-2" /> Courses: {uni.courses}
              </p>
              <p className="text-gray-600">
                <Clock className="inline-block mr-2" /> Established:{" "}
                {uni.established}
              </p>
            </div>
          ))}
      </div>

      <div className="text-sm text-muted-foreground border-t pt-3">
        Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd> +{" "}
        <kbd className="px-2 py-1 bg-muted rounded text-xs">K</kbd> to open
        search
      </div>
    </ModalRoot>
  );
};

export default SearchModalRoot;
