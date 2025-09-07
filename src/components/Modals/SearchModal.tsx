"use client";

import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalWrapper/ModalRoot";
import { useAppContext } from "@/AppContext/AppContextProvider";
import { MapPin, Users, BookOpen } from "lucide-react";
import { Input } from "../ui/input";
import { University } from "@/lib/type";
import ProgressBar from "../progressBar";
import { useRouter } from "next/navigation"; // ✅ for redirect
import { Button } from "../ui/button";
import { hitServerApi } from "@/lib/useServerApi";

const SearchModalRoot = () => {
  const { OpenSearchModal, handleOpenSearchModal } = useAppContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // ✅ Next.js router

  useEffect(() => {
    if (!searchQuery) {
      setUniversities([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await hitServerApi(
          `/api/universities/search?q=${searchQuery}`
        );
     
        setUniversities(data?.universities || []);
      } catch (error) {
        console.error("Error fetching universities:", error);
      } finally {
        setLoading(false);
      }
    }, 300); // ⏳ debounce (0.3s)

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // ✅ Handle button click → redirect to dedicated page
  const handleSearchRedirect = () => {
    if (searchQuery.trim()) {
      handleOpenSearchModal(); // close modal
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <ModalRoot isOpen={OpenSearchModal} onClose={handleOpenSearchModal}>
      {/* Search input + button */}
      <div className="flex items-center gap-2 my-6">
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for universities..."
          value={searchQuery}
          className="flex-1"
        />
        <Button
          onClick={handleSearchRedirect}
          className="px-4 py-2 text-white   transition"
        >
          Search
        </Button>
      </div>

      {/* Empty state */}
      {universities.length === 0 && !loading && (
        <div className="my-10 flex flex-col items-center justify-center">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-2">🎓</div>
            <h2 className="text-lg font-semibold text-gray-700">
              No universities found
            </h2>
            <p className="text-gray-500 mt-1">
              Try a different search term or explore popular ones.
            </p>
          </div>
        </div>
      )}

      {/* Progress bar */}
      {loading && <ProgressBar />}

      {/* Search results preview */}
      {!loading &&
        universities?.map((uni: University) => (
          <div
            key={uni.name}
            className="p-3 mb-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
          >
            <h2 className="text-lg font-semibold mb-2">{uni.name}</h2>
            <div className="space-y-1 text-sm text-gray-600">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" /> {uni.country},
                {uni.city}
              </p>
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2 flex-shrink-0" /> Students:{" "}
                {uni.studentCount}
              </p>
              <p className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" /> Courses:{" "}
                {uni.programs.length}
              </p>
            </div>
          </div>
        ))}

      {/* Footer */}
      <div className="text-sm text-muted-foreground border-t pt-3">
        Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl</kbd> +{" "}
        <kbd className="px-2 py-1 bg-muted rounded text-xs">K</kbd> to open
        search
      </div>
    </ModalRoot>
  );
};

export default SearchModalRoot;
